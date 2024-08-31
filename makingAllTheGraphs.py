import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-4, 5, 400)  # Generates 400 points between -10 and 10
y = (x + 3)*(x - 1)*(x - 4)
# Create the plot
plt.figure(figsize=(4, 4))
plt.plot(x, y, label='y = (x + 3)(x - 1)(x - 4)', color='g')
plt.legend()
plt.grid(True)
# Save the plot as an image file
plt.savefig('./assets/plot-01.png', format='png', dpi=300)  # Save as PNG with 300 DP

x = np.linspace(0, 3, 300)
y = x ** 3
plt.figure(figsize=(4, 4))
plt.plot(x, y, color='g')# label='y = x^3',)

x = np.linspace(3, 4, 100)
y = x ** 3
plt.plot(x, y, color='r')
plt.plot(3, 27, 'go', color='black')#, label="(2, 8)")
plt.text(3.05, 24, '(3, L)', color='black')
plt.grid(True)
plt.savefig('./assets/plot-02.png', format='png', dpi=300)


