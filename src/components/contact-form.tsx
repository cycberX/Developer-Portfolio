"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().trim().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState<string | null>(null);
  const [fallbackLink, setFallbackLink] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setFallbackLink(null);
    setActivationNotice(null);

    const payload = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      _subject: `[Portfolio Inquiry] ${values.subject} from ${values.name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch("https://formsubmit.co/bandgarsanskar19@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || `Error status: ${res.status}`);
      }

      if (
        data?.message &&
        typeof data.message === "string" &&
        data.message.toLowerCase().includes("activate")
      ) {
        setActivationNotice(
          "First-time FormSubmit activation notice: A verification email has been sent to bandgarsanskar19@gmail.com. Please confirm the email once from FormSubmit to complete setup."
        );
      }

      form.reset();
      setSubmitted(true);
      toast({
        title: "Message Sent via FormSubmit!",
        description: "Your message has been delivered to bandgarsanskar19@gmail.com.",
      });
    } catch (error: any) {
      console.error("FormSubmit submission error:", error);
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry: ${values.subject}`);
      const mailtoBody = encodeURIComponent(
        `Hi Sanskar,\n\nName: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\nMessage:\n${values.message}\n`
      );
      setFallbackLink(`mailto:bandgarsanskar19@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);

      toast({
        variant: "destructive",
        title: "Submission Status",
        description:
          error?.message ||
          "Could not connect to FormSubmit. You can send your message directly via email below.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold font-headline">Thank You for Reaching Out!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Your message has been transmitted to <strong>bandgarsanskar19@gmail.com</strong> via FormSubmit. I typically respond within 24-48 hours.
        </p>
        {activationNotice && (
          <div className="p-3 rounded-md bg-secondary text-xs text-muted-foreground max-w-sm mx-auto border border-border">
            {activationNotice}
          </div>
        )}
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setActivationNotice(null);
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        action="https://formsubmit.co/bandgarsanskar19@gmail.com"
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* FormSubmit Hidden Configurations */}
        <input type="hidden" name="_subject" value="New Contact Message from Portfolio" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="Sanskar Bandgar"
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

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
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

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="Software Project / Opportunity Inquiry"
                  name="subject"
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project, idea, or questions..."
                  className="min-h-[120px] resize-y"
                  name="message"
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

        {fallbackLink && (
          <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>FormSubmit was temporarily unreachable.</span>
            </div>
            <a
              href={fallbackLink}
              className="underline font-semibold hover:opacity-80 inline-flex items-center gap-1"
            >
              <Mail className="h-3.5 w-3.5" /> Open in Email App
            </a>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.99]"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending via FormSubmit...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Delivered directly to{" "}
          <a
            href="mailto:bandgarsanskar19@gmail.com"
            className="text-primary hover:underline font-medium"
          >
            bandgarsanskar19@gmail.com
          </a>{" "}
          via FormSubmit. No spam or marketing.
        </p>
      </form>
    </Form>
  );
}
