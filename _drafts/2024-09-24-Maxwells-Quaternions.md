James Clerk Maxwell originally formulated his electromagnetic theory using 20 equations in his 1865 paper **"A Dynamical Theory of the Electromagnetic Field"**. This formulation was significantly different from the four simplified vector calculus equations that we use today (the modern **Maxwell's equations**). Maxwell's original set of equations involved many more variables and quaternion-based mathematics.

While the equations themselves are not typically presented in modern quaternionic form today, they were written in a mix of scalar and vector quantities and required several more steps to simplify. Let me walk you through the historical progression of these equations and explain how they connected to quaternionic mathematics.

### Maxwell's 20 Original Equations

Maxwell’s 1865 theory described the relationship between electric and magnetic fields, currents, and charge. These equations incorporated terms that reflected electric and magnetic potentials, and the force interactions between them.

Here’s a simplified version of Maxwell’s original 20 equations. Keep in mind that the notation here is adapted to modern vector calculus but historically, the equations used more abstract forms such as quaternions, which were ultimately rewritten by Heaviside and Gibbs in a more tractable form:

#### The 20 Equations (in modern notation):


1. **Electric Field Divergence:**
   $ \nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$
   (Gauss’s law for electric fields)

2. **Magnetic Field Divergence:**
  $ \nabla \cdot \mathbf{B} = 0 $
   (No magnetic monopoles)

3. **Electric Field Curl:**
   \[
   \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
   \]
   (Faraday’s law of induction)

4. **Magnetic Field Curl:**
   \[
   \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
   \]
   (Ampère’s law with Maxwell's correction)

5. **Ohm’s Law:**
   \[
   \mathbf{J} = \sigma \mathbf{E}
   \]
   (Current density is proportional to the electric field)

6. **Current Continuity Equation:**
   \[
   \nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0
   \]
   (Conservation of charge)

7. **Definition of Magnetic Potential:**
   \[
   \mathbf{B} = \nabla \times \mathbf{A}
   \]
   (Magnetic field is the curl of the vector potential)

8. **Definition of Electric Potential:**
   \[
   \mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}
   \]
   (Electric field is related to both scalar and vector potentials)

The rest of the equations involve detailed interrelations between field components, currents, and charge densities that today are represented more compactly using vector calculus.

#### The Quaternion Formulation

Maxwell initially used **quaternions** to unify these expressions into a more generalized form. Quaternions extend complex numbers into 3D, allowing for more compact representation of rotational and spatial transformations. Here's how the quaternionic approach differed from modern vector calculus:

- Quaternions have the form: 
  \[
  q = a + bi + cj + dk
  \]
  where \(a\) is a scalar and \(bi, cj, dk\) are the three components of a 3D vector.

In Maxwell's work:
- **Electric and magnetic fields** could be expressed as quaternionic quantities, with both scalar and vector components.
- Maxwell combined these quaternionic entities to describe how electric and magnetic fields interact, rotate, and propagate through space.

#### Example of Quaternionic Form in Maxwell’s Equations:
Maxwell's quaternionic forms are more complex, and involve operations like **nabla (∇)** acting on quaternionic fields, which includes both vector and scalar terms. 

In modern vector calculus:
\[
\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}
\]
This could be written in quaternion form with the quaternionic derivative combining both the scalar \(\phi\) and vector \(\mathbf{A}\).

In quaternion form:
\[
\mathbf{B} = \nabla \times \mathbf{A}
\]

would appear as a quaternion derivative acting on the vector potential.

---

### The Evolution from Quaternions to Vector Calculus

While quaternions provided a unified way of expressing both scalar and vector components, they were eventually replaced by the more straightforward **vector calculus** notation introduced by Heaviside and Gibbs in the 1880s.

Maxwell's quaternionic approach was elegant but complicated. **Oliver Heaviside** was instrumental in reducing these 20 equations into the four well-known **Maxwell’s Equations** in vector form that are much more familiar to modern physicists and engineers:

1. Gauss’s Law for Electric Fields
2. Gauss’s Law for Magnetism
3. Faraday’s Law of Induction
4. Ampère’s Law (with Maxwell’s correction)

### Why Quaternions Were Phased Out

- **Complexity:** Quaternions, while powerful in describing 3D rotations, proved cumbersome when dealing with fields and potentials in electromagnetism. The simpler vector calculus operations (like **divergence** and **curl**) provided a more intuitive and computationally efficient framework for describing electric and magnetic fields.
  
- **Adoption of Vector Calculus:** With the development of vector calculus, the quaternion approach was gradually replaced because vector operators like the dot product and cross product were easier to teach, compute, and visualize.

### Conclusion

Maxwell's original equations in quaternion form were a more abstract, mathematically elegant expression of electromagnetic theory. However, the quaternion formulation was complex and less practical for widespread use. Over time, these equations were reformulated into the vector calculus version we use today, thanks to contributions from physicists like **Oliver Heaviside** and **Josiah Willard Gibbs**.

Though the original quaternionic equations aren't as commonly used or taught today, they were an important stepping stone in the development of classical electrodynamics and helped pave the way for the modern mathematical formalism of Maxwell's equations.

Certainly! In James Clerk Maxwell's 1865 paper, **"A Dynamical Theory of the Electromagnetic Field,"** the original formulation of his equations was far more extensive than the simplified modern four equations. Maxwell initially expressed **20 equations** that described the behavior of electric and magnetic fields, currents, and potentials. These equations were later reduced into the four famous **Maxwell's Equations** using vector calculus by Oliver Heaviside and others.

The **last 12 equations** from Maxwell's original set mostly deal with how the electric and magnetic fields relate to their respective potentials, and how changes in one field affect the other.

Here are the **last 12** of Maxwell's original 20 equations, converted into modern vector notation for clarity:

---

### Maxwell's Original Equations (Equations 9-20)

9. **Magnetic Field Divergence**:
   \[
   \nabla \cdot \mathbf{B} = 0
   \]
   - Magnetic monopoles do not exist, and magnetic field lines form closed loops.

10. **Current Continuity (Charge Conservation)**:
    \[
    \nabla \cdot \mathbf{J} = -\frac{\partial \rho}{\partial t}
    \]
    - The divergence of the current density \(\mathbf{J}\) is related to the time rate of change of the charge density \(\rho\), expressing the conservation of charge.

11. **Magnetic Potential Relationship**:
    \[
    \mathbf{B} = \nabla \times \mathbf{A}
    \]
    - The magnetic field \(\mathbf{B}\) is the curl of the magnetic vector potential \(\mathbf{A}\).

12. **Electric Potential Relationship**:
    \[
    \mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}
    \]
    - The electric field \(\mathbf{E}\) is related to both the scalar potential \(\phi\) and the time derivative of the magnetic vector potential \(\mathbf{A}\).

13. **Equation of Continuity (for charge)**:
    \[
    \nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0
    \]
    - This expresses the continuity of charge in a current-carrying system.

14. **Electric Field and Potential Relation**:
    \[
    \mathbf{E} = -\nabla \phi
    \]
    - This expresses that the electric field \(\mathbf{E}\) is the gradient of the scalar potential \(\phi\).

15. **Electric Field and Magnetic Field Relation**:
    \[
    \mathbf{E} = -\frac{\partial \mathbf{A}}{\partial t}
    \]
    - This expresses that the electric field \(\mathbf{E}\) is related to the time derivative of the magnetic vector potential \(\mathbf{A}\).

16. **Electromotive Force and Magnetic Field**:
    \[
    \mathbf{J} = \sigma (\mathbf{E} + \mathbf{v} \times \mathbf{B})
    \]
    - The current density \(\mathbf{J}\) is related to the electric field \(\mathbf{E}\), the velocity of the charges \(\mathbf{v}\), and the magnetic field \(\mathbf{B}\).

17. **Magnetic Field and Current Relationship (Ampère’s Law)**:
    \[
    \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
    \]
    - This is the modern form of Ampère’s law with Maxwell's correction, relating the curl of the magnetic field to the current density and the time derivative of the electric field.

18. **Magnetic Field Induced by Current**:
    \[
    \nabla \times \mathbf{B} = \mu_0 \mathbf{J}
    \]
    - This is the simpler form of Ampère’s law without Maxwell's correction, where the curl of the magnetic field is proportional to the current density.

19. **Faraday’s Law of Induction**:
    \[
    \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
    \]
    - Faraday’s law, stating that a time-varying magnetic field induces a circulating electric field.

20. **Maxwell's Displacement Current**:
    \[
    \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} = \nabla \times \mathbf{B}
    \]
    - This term describes the displacement current, which Maxwell introduced to account for a time-varying electric field generating a magnetic field even in the absence of a traditional current.

---

### Explanation of the Last 12 Equations:

These equations address relationships between electric and magnetic fields, potentials, and how they influence each other over time. Maxwell’s introduction of the **displacement current** in equation 20 allowed his theory to describe electromagnetic waves, leading to the prediction that light is an electromagnetic wave.

- **Equations 9-12** are foundational descriptions of how electric and magnetic fields interact with potentials, essentially bridging static and dynamic fields.
- **Equations 13-16** describe various continuity and field-potential relationships that ensure charge conservation and relate the electric field to scalar and vector potentials.
- **Equations 17-20** describe the fundamental relationships between electric and magnetic fields in dynamic settings, such as Ampère’s Law, Faraday’s Law of Induction, and the displacement