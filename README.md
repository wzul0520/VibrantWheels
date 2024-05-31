# VibrantWheels
Rani's creative coding major project

## Instruction
1. **Load the Page**: Simply open the HTML file in your web browser.
2. **Watch the Animation**: The animation will start automatically and run continuously.

## Animation Overview

This project includes multiple animated classes such as concentric circles, glowing circles, radiating lines, and various chains of circles. Each classes has its unique animation style and behavior, creating a rich and varied visual experience.

## Individual Approach to Animation

### My Approach: Time-Based Animation

I chose to drive my individual code using time as the primary factor. The animations for the flower, radiating lines, and broken chains are created by easing functions that rely on the passage of time to create smooth transitions.

### Properties Animated

- **Flower**: The petals of the flower grow and shrink over time, creating a pulsating effect.
- **Radiating Lines**: The length of the radiating lines changes dynamically, giving the impression of a breathing pattern.
- **Broken Chains**: The entire chains rotate around their center points, creating as rotational effect.

## Inspirations

I drew inspiration from several sources, including:

- **[Mandala](https://dribbble.com/shots/486360-Mandala-In-Motion-Animation-1)**: The intricate and symmetrical patterns of mandalas influenced the design and animation of the concentric circles.
  
  ![Mandala](https://cdn.dribbble.com/users/24711/screenshots/486360/media/bc88b613556ec241ffd7b23fe0df79da.gif)

- **[Spirograph](https://dribbble.com/shots/7102589-Spirograph-Dribbble)**: The rotating chains and circles mimic the intricate patterns created by spirographs.

  ![Spirograph](https://cdn.dribbble.com/users/1354693/screenshots/7102589/media/1e57ead2d9481faf21c5a2d09dcd88ab.gif)


## Technical Explanation

### Flower Animation

The flower's animation uses an easing function based on the cosine wave to smoothly interpolate the size of the petals between a minimum and maximum size. The code snippet responsible for this is:

```javascript
time += 0.05; // Control the speed of the animation
let easeInOut = (1 - cos(time * PI)) / 2; // Easing function
let scaleFactor = easeInOut; // Apply easing function for smooth transition
flower.petalWidth = lerp(flowerMinSize, flowerMaxSize, scaleFactor); // Linearly interpolate between min and max size
flower.petalHeight = flower.petalWidth / 4; // Adjust the petal height proportionally
flower.centerSize = flower.petalWidth / 4; // Adjust the center size proportionally
flower.display();
```


### Radiating Lines Animation
The radiating lines animation is similar, where the length of the lines changes based on the same easing function, creating a dynamic visual effect:

```javascript
time += 0.05; // Control the speed of the animation
let easeInOut = (1 - cos(time * PI)) / 2; // Easing function
radiatingLines.length = lerp(radiatingLinesMinLength, radiatingLinesMaxLength, easeInOut); // Interpolate between min and max lengths
radiatingLines.display();
```

### Broken Chains Rotation
The broken chains rotate around their centers using a simple rotation increment. This adds a dynamic rotational effect to the visual elements:

```javascript
brokenChain.updateRotation(positiveAngleIncrement);
brokenChain2.updateRotation(positiveAngleIncrement);
brokenChain3.updateRotation(positiveAngleIncrement);
```

## Changes to Group Code
I made several changes to the group code, mainly on implementing the time-based easing animations and the rotational behavior for the broken chains. This involved adding new methods to the existing classes and integrating these methods into the draw function to create smooth animations.

## Performance Note
Due to the large size and complexity of the group code, the performance might not be as smooth as desired. This is something to be aware of when running the project, especially on less powerful hardware.
