// Datastructure to hold the data
class RPSDataset {
  constructor() {
    this.labels = []
  }

  //Add example respectively   
  addExample(example, label) {
    // First time initialization and adding example
    if (this.xs == null) {
      this.xs = tf.keep(example);
      this.labels.push(label);
    // Otherwise adding to previous and disposing of old data.
    } else {
      const oldX = this.xs;
      this.xs = tf.keep(oldX.concat(example, 0));
      this.labels.push(label);
      oldX.dispose();
    }
  }
  
  //Encode labels    
  encodeLabels(numClasses) {
    // For each label, will be adding and converting to appropriate class
    for (var i = 0; i < this.labels.length; i++) {
      // Like before, just doing initial first case check
      if (this.ys == null) {
        this.ys = tf.keep(tf.tidy(
            () => {return tf.oneHot(
                tf.tensor1d([this.labels[i]]).toInt(), numClasses)}));
      //For every element after, it will do this
      } else {
        const y = tf.tidy(
            () => {return tf.oneHot(
                tf.tensor1d([this.labels[i]]).toInt(), numClasses)});
        const oldY = this.ys;
        this.ys = tf.keep(oldY.concat(y, 0));
        oldY.dispose();
        y.dispose();
      }
    }
  }
}