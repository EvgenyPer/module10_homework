// 1, 23, 42, 23, 54, 13, 4, 5, 8, 0, 7, 6

let Mas = [1, 23, 42, 23, 54, 13, 4, 5, 8, 0, 7, 6];
let aNul = 0;
let Chet = 0;
let NeChet = 0;
console.log("В массиве " + Mas.length + " переменных");
for(i=0; i<Mas.length; i++){
  if (Mas[i] == null)
    {
      aNul++;
    }
  else
    {
      if (Mas[i] % 2 == 0)
      {
        Chet++;
      }
      else{
        NeChet++
      }
    }
}
console.log("Значений NULL = " + aNul);
console.log("Четных чисел в массиве = " + Chet);
console.log("Нечетных чисел в массиве = " + NeChet);
