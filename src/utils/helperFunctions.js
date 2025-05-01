export function getLpaRange(input) {
    const numMatch = input.toString().match(/\d+/);
  
    if (!numMatch) {
      return "Invalid salary";
    }
  
    const salary = parseInt(numMatch[0]);
  
    if (salary <= 0) {
      return "Invalid salary";
    }
  
    const salaryInLpa = salary / 100000;
    const lowerBound = Math.floor(salaryInLpa);
    const upperBound = lowerBound + 1;
  
    return `${lowerBound}-${upperBound} LPA`;
  }