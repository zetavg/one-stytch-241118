import { SubmitButton } from "~/code/ui/SubmitButton";
import { LoadingOverlay } from "~/code/ui/LoadingOverlay";
import { SchemaForm, formFields } from "~/code/ui/SchemaForm";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { YStack, Theme, Paragraph, H2 } from "tamagui";
import { useRouter, useParams } from "one";
import { useSession } from "~/code/store/session";
import { useState } from "react";

const SignInSchema = z.object({
  email: formFields.text.email().describe("Email // Enter your email"),
  code: formFields.text
    .optional()
    .describe("Code // Enter the code you received"),
});

export const SignInScreen = () => {
  const [step, setStep] = useState<"sign-in" | "verify-code">("sign-in");
  const { sendCode, loginWithCode, isLoading } = useSession();
  const router = useRouter();
  const params = useParams<{ email?: string }>();

  const form = useForm<z.infer<typeof SignInSchema>>();

  async function handleSubmit({ email, code }: z.infer<typeof SignInSchema>) {
    console.log("handleSubmit", email, code);
    if (step === "sign-in") {
      const { success } = await sendCode({ email });
      if (success) {
        setStep("verify-code");
        form.clearErrors("code");
      }
    } else if (step === "verify-code" && code) {
      const { success, error } = await loginWithCode({ email, code });
      if (success) {
        router.replace("/");
        return;
      }

      if (error) {
        form.setError("code", { type: "custom", message: error });
      } else {
        form.setError("code", { type: "custom", message: "Unable to login" });
      }
    }
  }

  return (
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        schema={SignInSchema}
        defaultValues={{
          email: params?.email || "",
          code: "",
        }}
        onSubmit={handleSubmit}
        renderAfter={({ submit }) => {
          const onPress = () => {
            console.log("here");
            submit();
          };

          return (
            <>
              <Theme inverse>
                <SubmitButton onPress={onPress} br="$10">
                  Sign In
                </SubmitButton>
              </Theme>
            </>
          );
        }}
      >
        {({ code, email }) => (
          <>
            <YStack gap="$3" mb="$4">
              <H2 $sm={{ size: "$8" }}>Welcome Back</H2>
              <Paragraph theme="alt1">Sign in to your account</Paragraph>
            </YStack>
            {step === "sign-in" && email}
            {step === "verify-code" && code}
          </>
        )}
      </SchemaForm>
      {isLoading && <LoadingOverlay />}
    </FormProvider>
  );
};
