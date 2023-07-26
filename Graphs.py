#  Program created by: Patrick Layman @ 9PM on July 26th, 2023://
#  Import necessary libraries://

import matplotlib.pyplot as plt
import matplotlib.ticker as ticker

#  Identify axis parameters://

Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

Sales = []
for Month in Months:
    Sale = float(input(f"Enter total sales for {Month}: "))
    Sales.append(Sale)

# Create the graph

plt.plot(Months, Sales)
plt.xlabel('Months (x)')
plt.ylabel('Sale Amounts (y)')
plt.title('Graph of Sales per Month:')
plt.grid(True)

#  Function to format the y axis://


def dollar_sign_formatter(x, _):
    return f'${x:.2f}'


plt.gca().yaxis.set_major_formatter(ticker.FuncFormatter(dollar_sign_formatter))

#  Show your results://

plt.show()