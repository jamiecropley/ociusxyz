---
draft: false
layout: layouts/blogpost.njk
title: Game Engine Overview
date: 2023-07-15
---

# Game Engine Overview

Just a run down of the components of the engine.

In order that I am going to do them:

- Engine Control
  - Window Render (GLFW)
  - Graphics API Initial Setup (Vulkan)
  - Game Loop
- Math Engine
  - Vector Class
    - Vector Addition
    - Vector Subtraction
    - Dot Product
    - Cross Product
  - Matrix Class
    - Transform (e.g. rotation)
    - Invert
    - Transpose
    - Identity
  - Future (Not important for now):
    - Quaternion & Dual-Quaternion operations
- Rendering Engine
  - Graphics API (OpenGL)
  - Shaders
  - Rasterizer
  - Texture Mapping
  - Lighting Model
  - Visibility Determination
  - Post-Processing Effects
  - Scene Graph
  - Animation Systems
  - Physics Engine Integration
- Physics Engine
  - Collision Detection System
  - Collision Response System
  - Rigid Body Dynamics
  - Soft Body Dynamics
  - Fluid Dynamics
  - Constraints and Joints
  - Vehicle Dynamics
  - Terrain and Environmental Physics
  - Mathematical Tools and Libraries
  - Optimization Techniques
- Entities
- AI Engine
  - Pathfinding
  - Decision Making
  - Fuzzy Logic
  - Neural Networks
  - Genetic Algorithms
  - State Machines
  - Behavior Trees
  - Utility Theory
  - Goal-Oriented Action Planning
  - Planning
  - Learning
  - Perception
  - Steering
  - Future (Not important for now):
    - Natural Language Processing
    - Speech Recognition
    - Computer Vision
    - Machine Learning
    - Deep Learning
- Networking Engine
- Audio Engine
- Scripting Engine
- Accessibility Engine
  - Works with other parts of the engine, e.g. AI Engine, UI Engine, Input Engine etc...
- Input Engine
- UI Engine 
- Editor


Overall this is a rough list to get me started and I will most likely change it as I am creating the engine as need be.