---
layout: post
title: ChairBot Chess study: preliminary results
comments: true 
category: researchblog
---

Last week I went over all the videos collected from the six chairbot chess sessions done in Spring'18. I discovered a lot of interesting qualitative data in those videos which I had to put on hold and I went on to do some quantitative analysis.

![Chairbots and table setup for the chess study](/data/images/chairbot_chess.jpg)

## Motivation
After working on the technical side of building a robot chair 'chairbot', I was interested in researching 'expressive motions'. 
There has been a lot of work with expressive motion, but it still is a relatively new field in social robotics. 
Especially, with non-anthropomorphic robots, I picked up 'personality' as my research topic. 
I designed a methodology to understand modeling 'personality' with chairbots in a restaurant/cafe context. 
Imagine, being in a restaurant and a chairbot approaches you quickly, very near and in an assertive way, 
or being very polite, shy and submissive. In both the cases, how would the robot motion look like?

Taking inspiration from this design methodology, I designed a chairbot chess tournament! 
In spring'18, I conducted six sessions in Kelley engineering center's atrium at OSU. In each session, two chairbots were parked at a normal IKEA table which had a chessboard placed on top of it.
My goal was to 'persuade' people to come to the table and play a move of chess. All the sessions were conducted during lunch hours ~ 12 - 1PM/1:30PM.

In the sections below, I will discuss some of the research conditions of the study, followed by some overall ann preliminary results, followed by my future work.

## Research conditions
The research conditions that I was manipulating are shown in this table below:

| Chairbot action set | Chairbot action sequence I | Chairbot action sequence II |
| ------------------- | -------------------------- | --------------------------- |
|                None |               Forward-back |                    Spinning |
|        Forward-back |                   Approach |                    Approach |
|            Approach |                       Bump |                        Bump |
|                Bump |            Return to table |             Return to table |
|     Return to table |
|            Spinning |

The table above shows the actions that chairbots were could perform, and these two action sequences were taken usually to 'persuade' any person to come to the table and play a move. 
Note that once any person would reach the table, chairbots would offer themselves as seats by scooting in from behind. 

## Preliminary Results
Some preliminary results after going through the videos are shown below in this table

| Total time of the study | Avg. time per session |
| ----------------------- | --------------------- | 
|      6 hr 19 min 54 sec |    63 minutes 19 secs | 

| Total interactions | Person is at/went to the table |  Person sat on the chair  | Person followed a chair | Person played a move of chess |
| ------------------ | ------------------------------ | ------------------------- | ----------------------- | ----------------------------- |
|                231 |                        184 Yes |  59 (34 white + 25 black) |                  97 Yes |                        81 Yes |
|                    |                          47 No |                    172 No |                  134 No |                        150 No |

This is just one sketch that I drew. I plan to sketch a story of my chairbot chess study!
![Random sketches of people and chairbots](/data/images/cb_and_people_and_table-1.jpg)
