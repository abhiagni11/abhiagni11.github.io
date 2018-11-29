---
layout: post
title: Resolution Bot 2.0
comments: true 
category: researchblog
---

## Motivation ##

Ever considered having a robot help you stick to your new year's resolutions? As easy it might seem, every year in the month of January we (considering all humans under a single unbrella, generally true) feel very motivated, excited, disappointed and in despair all at the same time. Sticking to your resolutions is [very hard](https://www.entrepreneur.com/article/306400) and for many of us it's about maintaing the primary wealth of all - our health. 

To promote human wellness we propose the use of a robotic agent as a wellness coach that keeps participants on track with health goals. A robot has the potential to combine the low-cost of mobile notifications with the effectiveness of social techniques for motivating exercise. To test this idea, this study uses 'Resolution Bot' and is themed around New Years’ resolutions: with a tele-operated robot that visits participants to help motivate healthy behavior throughout the day. We call this Wizard of Oz system ResolutionBot. Our robot interacts with people in ways designed to promote healthy behavior in three key health areas: emotional, dietary, and physical health.

<!--
The idea of 'Resolution Bot' came out of this. It's a robot to help you succeed in sticking to healthy lifestyle by motivating you and being with you where you spend most of your day - the office.
-->
This study already took place last year with a TurtleBot robot which was completely teleoperated and was successful in recruiting participants in Graf Hall. This study spanned over three weeks and we saw in total 59 interactions!

## **ResolutionBot 2.0** ##

This year, we want to up our game and introduce some autonomy in the system. This effort is part of the 'long term autonomy' project which seeks to learn and develop autonomy in robotic systems over time by learning from previous experiences, esp. human robot interactions. 

Some components of the Resolution Bot. Note: The final robot would have these components fitted on the robot chassis that is not finalized yet.

<p align="center">
<img src="/data/images/resobot_erratic.png" width="720"/>
</p>

### **Key additions this year** ###

I am proposing to include a couple of key additions to ResolutionBot 2.0, w.r.t. robot autonomy -

1. Autonomy in robot motion -
  Autonomous driving: The robot would have a [Hokuyo lidar](https://www.robotshop.com/en/hokuyo-urg-04lx-ug01-scanning-laser-rangefinder.html) which will be used to map Graf Hall and then use the generated map to go to particular desks on the map. During the experiment runs, the robot would do real-time obstacle avoidance and would use a wizard's help in the end to align itself (face) properly with the participant. The desk information (location and person's name) would also be part of this new system, which would help us track the whereabouts of the robot.

2. Autonomy in participant recognition -
  To build trust and camaraderie with the participant, the robot would ask to save human paricipant's face early on in the study. If granted consent, it would then capture the face image through the camera and use this information to recognise the participant in the future.
<p align="center">
<img src="/data/images/face_recognition.gif" width="240">
</p>


3. Using ROS 2.0 for improved reliabilty -
  Apart from the proposed chages above, we plan on using [ROS 2.0](https://design.ros2.org/) for robot communication as we hope that it would provide improve reliabilty. ROS 2.0 is currently under heavy development but there have been 2 versions of it released already. We will establish a ros-bridge to bridge ROS with ROS 2.0, this way most of our code on the robot would still be in ROS and be integrated with sensors and drivers. But, for communication over Wifi it would be using ROS 2.0.
  
### **Communication framework sketches** ###

Communication framework of ResolutionBot 1.
<!--
![Resolution bot 1 sketch](/data/images/resobot1.png)
-->
<p align="center">
<img src="/data/images/resobot1.png" width="720"/>
</p>

Proposed communication framework of ResolutionBot 2 using ROS 2.0.
<!--
![Resolution bot 2 sketch](/data/images/resobot2.png)
-->
<p align="center">
<img src="/data/images/resobot2.png" width="720"/>
</p>

### **Components Tested** ###

Using ROS, me and Chris Bollinger from the Personal Robot Group at OSU have tested the following components (drivers, see the figure above for what these components are) independently:
* Hokuyo Lidar
* Asus depth camera
* Erratic robot base
* Camera

We have also tested [rosbridge](https://github.com/ros2/ros1_bridge), this lets us talk to ROS and ROS 2.0. We were succesful in sending Twist messages for robot base motion over the bridge.

### **Future Work** ###

Remaining **research goals**, include the following:
1. Prepare the revised IRB.
2. Prepare recruitment material.
3. Experimental design -
  * Robot manipulation conditions(?)
  * Where and when will the experiment run?
  * finalise interaction sequence

The following list is incomplete, but for the major remaining **technical goals**, we still need to:
1. Finish the final design of robot (how it would look like?) and fabricate the chassis for the components.
2. Test obstacle avoidance using the Lidar.
3. Have face recognition system in place.
4. Integrate these subsystems with a teleoperating UI *interface*.
5. Interaction annotation system

