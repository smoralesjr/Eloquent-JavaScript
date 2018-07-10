/*
Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######

*/

let draw = '#';

while ( draw.length <= 7 ){

  console.log(draw);
  draw = draw + '#';
  
};
