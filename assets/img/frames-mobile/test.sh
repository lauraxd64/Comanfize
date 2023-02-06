for i in {1..286}
do
   len="${#i}"
   if [[ $len == 1 ]];then
	f=00$i
   elif [[ $len == 2 ]];then
	f=0$i
   else
	f=$i
   fi
   wget https://www.esteelauderanrcade.com/assets/img/frames-mobile/mobile-$f.jpg
done
