# ConnectedLands
Find the connected lands together to form continents.

## Algorithm
using a 2d array of 1 (represent land) and 0 (represent water), we can connect lands in vertical, horizontal, and diagonal directions.
Each connected continent is colored, and the output is the number of continents.
The array is fixed (4*5) with randomly generated 0,1. The clustered lands are modeled as a graph, vertices are cells with 1 and edges connecting the vertices. The continents are found using deep first search.

![](https://i.imgur.com/0VmsboM.png)