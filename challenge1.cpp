#include <iostream>

using namespace std;

 void approximatePoints(int x1, int y1, int x2, int y2){

    int dx = x2 - x1;
    int dy = y2 - y1;
 
   
 
    for (int x = x1; x <= x2; x++) {
        // Assuming that the round function finds
        // closest integer to a given float.
        int y = y1 + dy * (x - x1);
 
        cout << "(" + to_string(x) + ", " + to_string(y) + ")";
    }
}


int main(){

    approximatePoints(3,4,8,9);

   






    return 0;
}