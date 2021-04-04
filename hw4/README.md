# Homework 4 Explanation

## Part 1
The best place to begin was from slide 882 of the lecture. This was copied over appropriately.

### Part 1.a
When copying the code earlier, the feature for batch was already implemented. We modified it was testing and running out model to improve the accuracy.
### Part 1.b
Dropout was also available in the code that was copied initially. I did add this twice to make sure dropout was applied on multiple layers.
### Part 1.c
Augmenting the images took some time to understand the library. Once that was done, we were able to create a method to create and add augmented images to help improve accuracy of the model.
### Part 1.d
We did have more layers in this model
### Part 1.e
We brought the relu layer. I combined it with tanh because the accuracy alone with relu was too low. Maybe a bug in the code, but due to time I moved forward with this approach.
### Part 1.f
We scaled the data using the standardscalar from scikitlearn. 
### Part 1.g
This was provided from the previous code as well. It was modified to try different configurations.
### Part 1.h
Near the bottom we used the same accuracy metric. I also added a confusion matrix, but it didn't work as I had thought. 
### Part 1.I
I looked at other collabs and was not sure what this was. Basic error checking is already provided but wasn't sure what this in particular was asking.
## Part B - Keras
Since we haven't learned too much to create our own models, I looked up a guide for this one:

https://keras.io/examples/vision/mnist_convnet/

I followed along and was able to understand to an extent what they were doing. This model scored 99% accuracy. The implementation was similar to what I coded above but using only relu. I wasn't able to figure out why my code couldn't do the same. There were some differences between the two implementations. Possibly there was something wrong with the implementation or the order that caused the score with relu only to be lower.