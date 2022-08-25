// [field,description,required,default]
export const itemFields = [
  ["title","","req","none"],
  ["image","URL","not-req","no picture"],
  ["category","","not-req","none"],
  ["description","","req","none"],
  ["price","","req","not-req","0.00"],
  ["sale","% Discount (10 is 10% sale)","req","0"],
  ["quantity","Number in stock","req","0"],
  ["stamp","Rubber stamp over corner of image","not-req",""],
  ["rating","Star 1-5 ex. 2.5 or 4","not-req","0"],
  ["count","Numb. of people who left a rating","not-req","0"]
]