export default function scale(inMin, inMax, outMin, outMax, value) {
  const result =
    ((value - inMin) * (outMax - outMin)) /
      (inMax - inMin) +
    outMin;

  if (result < outMin) {
    return outMin;
  } else if (result > outMax) {
    return outMax;
  }

  return result;
}
