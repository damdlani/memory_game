//test if colors are different every time

export const useColors = () => {
  const forbiddenColors = [
    "rgb(0, 0, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 185, 0)",
  ];

  const generateNumber = () => {
    return Math.ceil(Math.random() * 255);
  };

  const generateRandomColor = () => {
    const color = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`; 
    
    console.log(forbiddenColors);
      if(!forbiddenColors.some(forbidden => forbidden === color)){
        forbiddenColors.push(color);
        return color;
      } else {
        generateRandomColor();
      }
    
  };

    return {
      generateRandomColor,
    }
};
