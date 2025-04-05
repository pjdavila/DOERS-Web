import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Stamp, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible!",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: `${error}`,
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: FormValues) {
    contactMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-purple opacity-5 blur-[150px]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 xl:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
            <h2 className="font-bebas text-4xl md:text-6xl mb-6">LET'S <span className="text-orange">CREATE</span> TOGETHER</h2>
            <p className="font-space text-lg text-gray mb-8">Ready to take your digital presence to the next level? We're here to help transform your vision into reality.</p>
            
            <div className="mb-8">
              <h3 className="font-space text-xl mb-4">Get in Touch</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-orange" />
                </div>
                <a href="mailto:hello@doers.com" className="text-white hover:text-orange transition-colors">hello@doers.com</a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-purple" />
                </div>
                <a href="tel:+1234567890" className="text-white hover:text-purple transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-space text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="bg-white bg-opacity-5 w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange hover:bg-opacity-10 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-white bg-opacity-5 w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange hover:bg-opacity-10 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-white bg-opacity-5 w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange hover:bg-opacity-10 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-white bg-opacity-5 w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange hover:bg-opacity-10 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Dribbble className="text-white" />
                </motion.a>
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <div className="bg-white bg-opacity-[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray border-opacity-10 relative max-w-[800px] w-full mx-auto lg:mx-0">
              <h3 className="font-space text-2xl mb-6">Start Your Project</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-black bg-opacity-60 border border-gray border-opacity-20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange" 
                              {...field} 
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
                          <FormLabel className="text-sm font-medium text-gray">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              className="bg-black bg-opacity-60 border border-gray border-opacity-20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company" 
                              className="bg-black bg-opacity-60 border border-gray border-opacity-20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black bg-opacity-60 border border-gray border-opacity-20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mobile">Mobile Application</SelectItem>
                              <SelectItem value="web">Website / Web Application</SelectItem>
                              <SelectItem value="ott">OTT Application</SelectItem>
                              <SelectItem value="ai">AI & Automation</SelectItem>
                              <SelectItem value="design">UI/UX Design</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="bg-black bg-opacity-60 border border-gray border-opacity-20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange text-white px-6 py-4 rounded-lg font-space font-medium text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                    disabled={contactMutation.isPending}
                  >
                    <span>{contactMutation.isPending ? "SENDING..." : "SEND MESSAGE"}</span>
                    <Stamp size={18} />
                  </Button>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
