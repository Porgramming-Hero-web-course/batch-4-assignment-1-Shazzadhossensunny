{
  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };

  type AreaType = Circle | Rectangle;

  const calculateShapeArea = (input: AreaType): number => {
    if ("radius" in input) {
      return parseFloat((input.radius * input.radius * Math.PI).toFixed(2));
    } else {
      return (input.height * input.width);
    }
  };

  const circleArea: Circle = {
    shape: "circle",
    radius: 5,
  };

  const rectangleArea: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };

  const result = calculateShapeArea(circleArea);




}
