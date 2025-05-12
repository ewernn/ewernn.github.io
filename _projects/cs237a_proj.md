---
layout: default # page
title: "cs237a project"
# permalink: /URL-PATH
---
# Autonomous Wheeled Robot Navigation and Mapping in Simulation

**Wheeled robot mapped and navigated in simulation, stopping at stop signs and visiting specific objects using computer vision. Implemented A* for path planning, controllers for pose stabilization and trajectory tracking, and used grid mapping and point clouds for 2D and 3D SLAM.**

## Overview
Developed a wheeled robot capable of autonomously navigating a simulated environment decorated with images of animals on walls and stop signs. The robot accurately mapped the area, obeyed traffic signs, and visited designated locations before returning to its starting position.

<div style="text-align: center;">
  <img src="/assets/images/rviz_237a.jpg" alt="RViz Visualization" width="75%" height="75%">
  <p><em>RViz Visualization of Robot Environment and Trajectory</em></p>
</div>

## Completed Mission

1. Explored 3D environment and generated map within 30 seconds.
2. Robot identified and interacted with specific animals and stop signs.
3. Returned to starting position after exploration.
4. Successfully navigated to the finish line, adhering to set constraints.

## Technologies & Methods Used:

**Communication:** Utilized ROS publisher-subscriber model for inter-node communications.

**Path Planning:** Employed A* algorithm for efficient navigation.

**Control Systems:** Implemented dual control approaches:
- Pose stabilization for stationary positioning
- Trajectory tracking for dynamic movement along planned paths

**Localization & Mapping:**
- 2D grid mapping (gmapping) for A* navigation decisions
- 3D mapping with point clouds using ROS's PointCloud2 message type
- Complete SLAM (Simultaneous Localization and Mapping) implementation

**Visualization:** Integrated with RViz for real-time visualization of:
- True environment
- Robot's internal map representation
- Robot's point of view
- Motor speeds
- Planned trajectory path