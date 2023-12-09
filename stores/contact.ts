import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import sendMessage from "@/API/contact";

const schema = Yup.object({
  name: Yup.string(),
  email: Yup.string().email().required().label(""),
  message: Yup.string().required().max(4000).label("Your message"),
});

export const useContactStore = defineStore("contcatStore", () => {
  const { defineField, handleSubmit } = useForm({
    validationSchema: schema,
  });

  // state
  const responseError = ref(false);
  const serverResponse = ref(false);
  const responseSuccess = ref(false);
  const loading = ref(false);

  const vuetifyConfig = (state: any) => ({
    props: {
      "error-messages": state.errors,
    },
  });
  // form peoperties
  const [name, nameProps] = defineField("name", vuetifyConfig);
  const [email, emailProps] = defineField("email", vuetifyConfig);
  const [message, messageProps] = defineField("message", vuetifyConfig);

  const sendToMyEmail = handleSubmit(async (values): Promise<void> => {
    const response = await sendMessage({
      email: values.email,
      name: values.name,
      message: values.message,
    });
    loading.value = false;

    if (!response.success) {
      alert(response.message);
      return;
    }
    serverResponse.value = true;
    responseSuccess.value = true;
  });

  return {
    sendToMyEmail,
    email,
    emailProps,
    name,
    nameProps,
    message,
    messageProps,
    responseError,
    serverResponse,
    responseSuccess,
    loading,
  };
});
