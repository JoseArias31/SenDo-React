 const randomNames = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "Isabella", "Sophia", "Mia", "Charlotte",
    "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Sofia", "Avery", "Ella",
    "Scarlett", "Grace", "Chloe", "Victoria", "Riley", "Aria", "Luna", "Zoey", "Hannah", "Lily",
    "Savannah", "Addison"
  ];
  
  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  };
  
  export const randomName = generateRandomName();
  
  