export const fetchStoredSettings = () => {
    const storedSettings = localStorage.getItem("savedUserSettings");
    if (storedSettings) {
      try {
        const parsedSettings = JSON.parse(storedSettings);
        return parsedSettings;
      } catch (error) {
        console.error(error);
      }
    }
   return {}; 
};