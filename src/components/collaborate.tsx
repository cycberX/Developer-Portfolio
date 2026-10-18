"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  Loader2,
  Mail,
  Send,
  AlertCircle,
  Code2,
  Sparkles,
  Trophy,
  Users,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

const collaborateFormSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Please enter your full name (at least 2 characters)." }),
  email: z.string().trim().email({ message: "Please enter a valid email address." }),
  organization: z.string().trim().max(100).optional(),
  collaborationType: z.string().min(1, { message: "Please select a collaboration category." }),
  projectTitle: z.string().trim().min(3, { message: "Project title must be at least 3 characters." }),
  projectDescription: z
    .string()
    .trim()
    .min(15, { message: "Please share a brief description or proposed idea (at least 15 characters)." }),
  relevantTechnologies: z.string().trim().max(150).optional(),
  expectedTimeline: z.string().optional(),
  portfolioOrGithub: z
    .string()
    .trim()
    .refine((val) => !val || val.startsWith("http://") || val.startsWith("https://"), {
      message: "Please enter a valid URL beginning with https://",
    })
    .optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to being contacted regarding this proposal.",
  }),
});

type CollaborateFormValues = z.infer<typeof collaborateFormSchema>;

export default function Collaborate() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState<string | null>(null);
  const [fallbackLink, setFallbackLink] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<CollaborateFormValues | null>(null);

  const form = useForm<CollaborateFormValues>({
    resolver: zodResolver(collaborateFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      collaborationType: "",
      projectTitle: "",
      projectDescription: "",
      relevantTechnologies: "",
      expectedTimeline: "",
      portfolioOrGithub: "",
      consent: false,
    },
  });

  async function onSubmit(values: CollaborateFormValues) {
    setLoading(true);
    setFallbackLink(null);
    setActivationNotice(null);

    // FormSubmit payload formatted with dedicated field names and configuration parameters
    const payload = {
      name: values.fullName,
      email: values.email,
      organization: values.organization || "Independent / Not specified",
      collaboration_type: values.collaborationType,
      project_title: values.projectTitle,
      project_description: values.projectDescription,
      relevant_technologies: values.relevantTechnologies || "Not specified",
      expected_timeline: values.expectedTimeline || "Flexible",
      portfolio_or_github: values.portfolioOrGithub || "Not provided",
      consent: "Yes, agreed to be contacted regarding this proposal",
      _subject: `[Collaboration Proposal] ${values.projectTitle} (${values.collaborationType})`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/bandgarsanskar19@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || `Server responded with status ${response.status}`);
      }

      // Check for FormSubmit first-time activation notification
      if (
        result?.message &&
        typeof result.message === "string" &&
        result.message.toLowerCase().includes("activate")
      ) {
        setActivationNotice(
          "First-time FormSubmit activation notice: A verification email has been sent to bandgarsanskar19@gmail.com. Please confirm the email from FormSubmit once to complete setup."
        );
      }

      setSubmittedData(values);
      setIsSubmitted(true);
      toast({
        title: "Proposal Submitted via FormSubmit!",
        description: "Your collaboration request has been delivered to bandgarsanskar19@gmail.com.",
      });
    } catch (err: any) {
      console.error("FormSubmit collaboration error:", err);
      const fallbackSubject = encodeURIComponent(`Collaboration Proposal: ${values.projectTitle}`);
      const fallbackBody = encodeURIComponent(
        `Hi Sanskar,\n\nI submitted a collaboration proposal:\n\nName: ${values.fullName}\nEmail: ${values.email}\nOrganization: ${values.organization || "N/A"}\nType: ${values.collaborationType}\nProject Title: ${values.projectTitle}\nTimeline: ${values.expectedTimeline || "Flexible"}\nTechnologies: ${values.relevantTechnologies || "N/A"}\nGitHub/Portfolio: ${values.portfolioOrGithub || "N/A"}\n\nProject Description:\n${values.projectDescription}\n`
      );

      setFallbackLink(`mailto:bandgarsanskar19@gmail.com?subject=${fallbackSubject}&body=${fallbackBody}`);

      toast({
        variant: "destructive",
        title: "Submission Notice",
        description:
          err.message ||
          "Could not connect to FormSubmit. You can send your proposal directly via email below.",
      });
    } finally {
      setLoading(false);
    }
  }

  const collaborationBadges = [
    { label: "Software Projects", icon: Code2 },
    { label: "Open Source", icon: Users },
    { label: "Web Applications", icon: Sparkles },
    { label: "Hackathons", icon: Trophy },
    { label: "Startup Ideas", icon: Lightbulb },
  ];

  return (
    <section id="collaborate" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header (No decorative eyebrow badge) */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Collaborate With Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have an exciting idea, hackathon proposal, open-source initiative, or software project?
            I am always eager to join forces with developers, founders, students, and teams to build
            impactful digital products.
          </p>

          {/* Functional Collaboration Category Tags */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {collaborationBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border"
              >
                <badge.icon className="w-3.5 h-3.5 text-primary" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 sm:p-10">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-headline">Collaboration Proposal Sent!</h3>
                <p className="text-muted-foreground text-base max-w-md mx-auto">
                  Thank you, <strong>{submittedData?.fullName}</strong>. Your proposal for{" "}
                  <em>&ldquo;{submittedData?.projectTitle}&rdquo;</em> has been transmitted to{" "}
                  <strong>bandgarsanskar19@gmail.com</strong> via FormSubmit.
                </p>
                {activationNotice && (
                  <div className="p-3 rounded-md bg-secondary text-xs text-muted-foreground max-w-lg mx-auto border border-border">
                    {activationNotice}
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  I review collaboration proposals carefully and usually follow up within 24 to 48 hours.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setIsSubmitted(false);
                    setSubmittedData(null);
                    setActivationNotice(null);
                  }}
                >
                  Submit Another Idea
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={`mailto:${portfolioData.student.email}`}>
                    <Mail className="w-4 h-4 mr-2" /> Direct Email Follow-up
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form
                action="https://formsubmit.co/bandgarsanskar19@gmail.com"
                method="POST"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* FormSubmit Configuration Hidden Fields */}
                <input type="hidden" name="_subject" value="New Collaboration Proposal from Portfolio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Full Name <span className="text-primary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Alex Morgan"
                            name="name"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email Address <span className="text-primary">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="alex@company.com"
                            name="email"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Organization / Team (Optional) */}
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Organization or Team <span className="text-xs text-muted-foreground">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Startup / University / Team name"
                            name="organization"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Collaboration Type */}
                  <FormField
                    control={form.control}
                    name="collaborationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Collaboration Type <span className="text-primary">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select collaboration category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {portfolioData.collaborationTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="collaboration_type" value={field.value} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Project Title */}
                <FormField
                  control={form.control}
                  name="projectTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Project Title / Subject <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Distributed Analytics Dashboard, Hackathon Project, Open Source Utility"
                          name="project_title"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Description */}
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Project Description or Proposed Idea <span className="text-primary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe the concept, what problem it solves, what role you would like us to take on, and any relevant background..."
                          className="min-h-[140px] resize-y"
                          name="project_description"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          required
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        Min. 15 characters. Be as specific as you like regarding architecture, scope, or goals.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Relevant Technologies (Optional) */}
                  <FormField
                    control={form.control}
                    name="relevantTechnologies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Relevant Technologies <span className="text-xs text-muted-foreground">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Next.js, Node.js, AWS, MongoDB, Python"
                            name="relevant_technologies"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Expected Timeline (Optional) */}
                  <FormField
                    control={form.control}
                    name="expectedTimeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Expected Timeline <span className="text-xs text-muted-foreground">(Optional)</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select target timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {portfolioData.timelineOptions.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="expected_timeline" value={field.value} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Portfolio / GitHub URL (Optional) */}
                <FormField
                  control={form.control}
                  name="portfolioOrGithub"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Portfolio or GitHub URL <span className="text-xs text-muted-foreground">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://github.com/your-username or personal link"
                          name="portfolio_or_github"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Consent Checkbox */}
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-secondary/20">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-label="Consent to be contacted"
                          name="consent"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I agree to be contacted via email regarding this collaboration inquiry.{" "}
                          <span className="text-primary">*</span>
                        </FormLabel>
                        <p className="text-xs text-muted-foreground">
                          Your email will only be used to respond directly to this proposal.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Fallback banner if network error occurred */}
                {fallbackLink && (
                  <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-sm text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>FormSubmit service was temporarily unreachable.</span>
                    </div>
                    <Button asChild size="sm" variant="outline" className="border-destructive/30">
                      <a href={fallbackLink}>
                        <Mail className="h-4 w-4 mr-1.5" />
                        Send Proposal via Email App
                      </a>
                    </Button>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending via FormSubmit...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Collaboration Proposal
                      </>
                    )}
                  </Button>

                  <div className="text-xs text-muted-foreground text-center sm:text-right">
                    Prefer direct email?{" "}
                    <a
                      href={`mailto:${portfolioData.student.email}?subject=Collaboration%20Inquiry`}
                      className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                    >
                      {portfolioData.student.email}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Service Notice */}
                <div className="border-t border-border pt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    Submissions are delivered directly to <strong>bandgarsanskar19@gmail.com</strong> via FormSubmit.
                    Your information is never shared or used for unsolicited marketing.
                  </p>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
