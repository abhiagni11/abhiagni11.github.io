---
layout: robotics
title: Resolution Bot midway review
comments: true 
category: robotics
---

### How does the robot look like (while docked) ###

<p align="center">
<img src="/data/images/resolution_bot_docked.png" width="480">
</p>

### Where are the drivers ###

<p align="center">
<img src="/data/images/resolution_bot_drivers.png" width="720">
</p>

## Mid way report ##

ResoBot 2.0 started last week on Monday (1/14), and didn't had the best of the starts. Knowingly so, we had to fix some of the issues that are inevitable with mobile robots -- broken cable, wrong wiring, loose connections. Apart from these, we were most bugged by the WiFi connection issues faced in the first week. Although there is a camera on the robot that streams video over WiFi on the web teleop interface. For navigation we use a gopro as it is much better in quality and also provides with a wider field of vision. Nonetheless, we made our way through the first week. Unexpectedly (at least to me), we were able to recruit 20 participants in the first week itself. With so many people to feed snacks to, it was very exciting along with twitchiness of whether the robot would go into connection-broken-could-not-contact phase.

| Number of participants* |   Robot visiting hours  |
| ----------------------- | ----------------------- |
|                      20 | M-W-F, morning 9-11 AM  |
|                         | M-W-F, afternoon 2-4 PM |

### Some problems faced ###

1. The teleop interface demanded for some changes when we used it the first few times. Following an interaction script, we seeked to have the same flow in the buttons on the interface.
2. Accidental mishap in front of heather's office when the robot didn't realise the slight bump while entering the hallway which in it falling backwards and disintegrating just to get a human touch to assemble its pieces back together.
3. Losing connection from the gopro while taking the robot upstairs to the high bay, this however resulted in interesting interactions. A lonely sitting robot actually attracted sympathy from humans -- are you Ok or Lost? are you offering me a snack?
4. While running the study, it becomes cumbersome very quickly to track whom the robot has visited and who remains to be fed a snack. We iterated over a few templates in google sheets to store this data.
5. One interesting addition to this year is autonomous navigations. We haven't used it during the study but we have tested it out before. Actually, as the resobot study progressed, we were updating the map of graf hall - mapping another area and adding it to the map. Due to this, some inconsistency was generated in the teleop interface - which showcases the black-and-white map scanned from the onboard hokuyo lidar - and we couldn't use it during the run.

### Preliminary data ###

Some participant data collected from the ResoBot so far:

| # of visits |  # present  | # available | # did exercise | # took a snack |
| ----------- | ----------- | ----------- | -------------- | -------------- |
|          50 |          35 |          32 |             26 |             30 |

Most popular snack is again 'banana', which was competing against apples, granola bars and water.

There are three more full days remaining, which means 6 sessions in total which would result in around 60 visits in addition to the 50 visits so far. This is nearing double than last year where the robot had done total 65 visits.

