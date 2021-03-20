# Homework 3 Explaination

## Generating the data
I first needed to create a method to generate the desired input and output, 3 input 2 output. This is reperesented as the following:

`f(x,y,z) = (y_1, y_2)`

I generated a dataset with x, y and z values. I then created two sets of weights and bias, (w_0, b_0) and (w_1, b_1). The weight and bias were randomly assigned at the beginning. (w_0, b_0) times the dataset with x, y, and z will give you y_1. And (w_1, b_1) times the dataset with x, y, and z will give you y_2. This method is in every notebook called `generate_linear_three_input_two_output`.
## Part A - Custom Made
This was essentially copying the code that was provided by the professor. However the question that we need to solve is 3 input and 2 output. Based on some articles I read from the PyTorch discussions. Here are some links
- https://discuss.pytorch.org/t/a-model-with-multiple-outputs/10440
- https://discuss.pytorch.org/t/multiple-outputs-of-a-nn/68946/2

In order to accomodate this, I had to create the model twice. The first model would be responsible for fine tuning the variables to predict y_0. The second model (the same instance type as model 1) is responsible for fine tuning the variables to predict y_1. 

## Part B - PyTotch
### Part 1
This was fairly straight forward. I took the professors code and was able to convert our dataset to use the PyTorch data structure for (x, y, z) and (y_1, y_2). I used the mean square error like in part A to get the loss and update the weights appropriately. 

### Part 2
PyTorch offers a way to do auto differentiation by using the built in PyTorch datastructure. It was simple and did not need an extra loss function to update the weights respectively.

### Part 3
This was the simplest of the three steps. I used the built in PyTorch model to build the same model. I didn't need to add my own classes for linear and it was able to create a model on the generated dataset.

## Part C Keras/Tensorflow
Disclaimer, I am unsure if I did this part correctly. All the values in Tensorflow/Keras are mysterious and am unsure if it worked proprerly.
### Part 1
I followed the same strategy as before and copied boilerplate code from the professor. Here I used the Keras datastructure and the built in MSE loss function to create the model. The output however is really wonky and not easy to understand compared to PyTorch.

### Part 2
This one used GradientTape to auto differentiate and update the values appropriately for the weights. I use the cross entropy loss function instead for this one. I setup the optimizers and gradient tape for each model (which is for y_0 and y_1). Finally I was able to create a model that had fine tuned weights/bias. 

### Part 3
Again like PyTorch, this was the simplest of the three steps. I used the built in Keras model to build the same model. I didn't need to add my own classes for linear and it was able to create a model on the generated dataset.

# Conclusion
Part A was a great exercise to understand the fundamentals of what was going on. PyTorch was quite easy to use to solve the same problem. But Keras was probably the most difficult. I spent a bulk of my time trying to figure out how to setup the tapes and get the loss. But the output always gave warnings that weren't clear. The Keras Model however was quite nice, it worked on the first attempt of building it with out dataset.