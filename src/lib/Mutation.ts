// simulating post api call and saving data to local Storage.

import { InfoType } from "@/components/MultiStepForm";
import { useMutation } from "@tanstack/react-query";



const saveUserToLocalStorage = async (formData: InfoType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('userFormData', JSON.stringify(formData));
        resolve(formData); 
      }, 300); // Simulating latency
    });
  };
  
  export const useSaveUserMutation = () => {
    return useMutation({
      mutationFn: saveUserToLocalStorage, 
    });
  };