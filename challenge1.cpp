#include <iostream>
#include <vector>
#include <utility>
#include<cstdlib>

//Run the programm by writign this command in the terminal -> ./challenge1


using namespace std;
 
// function for rounding off the pixels
int round2(float n)
{
    if (n - (int)n < 0.5)
        return (int)n;
    return (int)(n + 1);
}
 
// Function for line generation
vector<pair<int,int> > DDALine(int x0, int y0, int x1, int y1){
    vector<pair<int,int> > points;
 
    int dx = x1 - x0;
    int dy = y1 - y0;
 
    int step;
 
    
    if (abs(dx) > abs(dy))
        step = abs(dx);
    else
        step = abs(dy);
 
    float x_incr = (float)dx / step;
    float y_incr = (float)dy / step;
 
    float x = x0;
    float y = y0;
 
    for (int i = 0; i < step; i++) {
        points.push_back(make_pair(x,y));
 

        x += x_incr;
        y += y_incr;
    }
        points.push_back(make_pair(x,y));
        return points;

}
 
int main(){
    vector<pair<int,int> > points;
    points = DDALine(2,3,9,100);
    for(int i = 0; i < points.size(); i++){
            cout << "(" << points[i].first <<  ", "  << points[i].second << ")";

    }
 
    return 0;
}