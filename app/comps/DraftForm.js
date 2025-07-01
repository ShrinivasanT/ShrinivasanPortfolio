"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { serverAction } from "../server-action";
import { formSchema } from "../form-schema";

const initialState = {
  success: false,
  message: "",
};

export function DraftForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [state, action, isPending] = React.useActionState(
    serverAction,
    initialState
  );

  return (
    <div id="contact" className="w-full md:p-18">
      <Form {...form}>
        <form
          action={action}
          className="flex flex-col p-4 md:p-6 w-full  mx-auto max-w-6xl rounded-md  gap-4 border"
        >
          <h2 className="text-2xl font-bold">Lets Connect . . .</h2>
          <p className="text-base text-muted-foreground">
            Please fill the form below to contact me
          </p>

          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full  ">
                  <FormLabel>Name *</FormLabel>
                  <FormControl className="bg-neutral-100">
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email *</FormLabel>
                  <FormControl className="bg-neutral-100">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message *</FormLabel>
                <FormControl className="bg-neutral-100">
                  <Textarea
                    {...field}
                    placeholder="Enter your message"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end pt-3">
            <Button
              className="rounded-lg hover:bg-blue-600 "
              size="sm"
              type="submit"
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {state?.success && (
            <p className="text-green-600 pt-2 text-sm">{state.message}</p>
          )}
        </form>
      </Form>
    </div>
  );
}
