## Assessment - Photos From Here
For this assessment, you will create a web application to display photos that were taken near the user's geographic location.

## GitLab Pages URL
https://josephdubon.gitlab.io/PROJECT-NAME-HERE

### Assessment Development Plan
    1. Get the geographic location from the browser
        https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
        a. Construct the query URL
            Example query URL (which should not contain any spaces or returns):
https://flickr.com/services/rest/?api_key=993fake589fake6cdfakefcb&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=39.76574&lon=-86.1579024&text=dog
                Key: 2a96b784d0ba4e0c0a78883ca2895246
                Secret: 41710fa796998991 
        b. Use fetch to send the request to Flickr
    2. Process the response data into an object
        a. Use the values in the response object to construct an image source URL
        b. Display the first image on the page
    3. In response to some event (e.g. a button click or a setInterval), show the next image in the collection

#### How to Break Down a Project
1. Read the requirements document in detail.
	a. Take notes of important points.
	b. Write down your questions.
2. Answer your questions!
3. Make a development plan.
	a. Describe the entire behavior of the program in 3 (or at most 4) steps. Don't use any JavaScript words!
	b. Break down each item into 4 (or 4) smaller steps by asking the question, "How?".
	c. Repeat until it's obvious how to turn the step into JS code.
4. Write the code!

#### License
MIT License

Copyright (c) [2020] [Joseph Adonay Dubon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.