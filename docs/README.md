# P Index App
Having principles creates heuristics that we can trust instead of having to redo the analysis each time.  These heuristics help us:
-  [Analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis), 
- Make decisions with limited information, and
- Think about the hard stuff on our time and not in the moment.
## What Makes a Good Principle 
A good Principle is one where the outcome of following the principle is superior to making the decision each time. 
There are a few traits that can help to make a good principle:
1. **It is Effective**: It leads to different decisions being made
2. When it is effective, **it is correct**: When it changes a decision, it tends to change it in the right direction
3. The **cost** of following the principle when it is wrong is less than that of not following it when it is correct. 

As a quick example, At work, 

> Assume everyone has positive intent. 

It meets all of the rules:

1.  With limited information, people often appear to be out to get me, so I would usually change my decision if I were following the principle.
2. At my work, no one is ever out to get me, so when I think that I am often wrong 
3.  If I assume positive intent and am wrong, not much happens, but if I act as if they have ill intent, I can damage relationships and lower trust.
## Scoring a Principle
So if we take these rules, we can care a score for our principles.

First, we want to measure each rule:
1. **Effective Rate ($E$)**: What percent of the time will you do it because the principle made you do it?
3. **Correct Rate ($C$)**:   What percent of that time will the principle make you do the right thing?
4. **Cost Ratio ($R$)**: What is worse, following the principle when it is wrong or not following it when it is right?
	- Following the Principle when it is wrong is hella worse ($\frac14$)
	- Following the principal when it is wrong is twice as bad ($\frac12$)
	- Following the Principle when it is wrong is slightly worse ($\frac45$)
	- They are the same (1)
	- Not following the Principle when it is right is slightly worse ($\frac54$)
	- Not following the Principle when it is right is twice as bad (2)
	- Not following the Principle when it is right is Hella worse (4)

We will start by comparing the cost of following the principle to the cost of not.  The cost of not following it is the rate at which you would not have followed the principle when it was right (which is the Correct rate) times the relative cost of that (Cost Ratio).
$$
\large{ \text{Cost of not Following} = C \cdot R}
$$
The cost of following the principle is just the rate at which it is incorrect
$$
\large{  \text{Cost of Following} = (1-C)}
$$
So, the Benefit of following the Principle is
$$
\large{\text{Benefit of following} = \text{Cost of not Follwoing} - \text{Cost of Following}}
$$
$$
\large{\text{Benefit of following} = C \cdot R - (1-C)}
$$
To finish off the P index, we want to discount this benefit by how Effective the Principle is, and then we multiply by 100 to make it easier to read:
$$
	\Large{P = 100 \cdot E\cdot(C \cdot R - (1-C))} 
	
	
$$
## Ratings
This will give us scores on a logarithmic scale to which we can assign Ratings.

| Ratting | Score | Explanation | 
| ------- | ------- | ------------ |
| **Bad** | $P<0$ | The principle is actively doing harm |
| **Meh** | $0<=P<25$ | The principle is not doing much and might not be worth the effort |
| **Average** | $25<=P<50$ | This principle is doing some work to improve your outcomes | 
| **Good** | $50<=P<100$  | This principle is hitting above it's weight |
| **Great** | $100<=P<200$ | This principle is extra solid |
| **Exceptional** | $200<=P$ | This principle is one of the best you are going to get. |

> [!tip] These numbers will be different for everyone; not all principles have the same value to everyone.

Let's give a few examples:
### Assume everyone has positive intent.

1.  **Effective Rate ($E$)**: With limited information, people often appear to be out to get me, so I would usually change my decision if I followed the principle. I will go with 50%
2. **Correct Rate ($C$)**:  At work, no one is ever out to get me; I am often wrong, so I will go with 80%.
3.  **Cost Ratio ($R$)**: If I assume positive intent and am wrong, not much happens, but if I act as if they have ill intent, I can damage relationships and lower trust.
	- Not following the Principle when it is right is twice as bad (2)

This gives me a respectable score of 56, which gets it a rating of Good
### Always tell the Truth
Let's try a classic

1. **Effective Rate ($E$)**:  I mostly tell the truth, so I would say this is 30%
2. **Correct Rate ($C$)**:   I am good at choosing when to lie, so I am only wrong (I overlie) 20% of the time.
3. **Cost Ratio ($R$)**: It is worse to lie at the wrong time than tell the truth at the wrong time, but not a lot worse, so I will go with 
	   Not following the Principle when it is right is slightly worse ($\frac54$)
	   
This gives me a score of -21, clearly in the rating of Bad.

###  Eat more plants
Let's do a modern classic as well 

1. **Effective Rate ($E$)**:  I do not love plants (and I love non-plants), so I would say this is high, 70%
2. **Correct Rate ($C$)**:  Yeah, eating plants is almost always the answer 90%
3. **Cost Ratio ($R$)**:   While missing out on the fun non-plant food can kind of such the benefits of more plants are just too big to compete 
	    Not following the Principle when it is right is Hella worse (4)
This gives me a crazy score of 245, landing it a rating of Exceptional!
### Summary

|Principle|Effective Rate|Correct Rate|Cost Ratio|score|Rating|
|---|---|---|---|---|---|
|Assume everyone has positive intent.|40%|80%|Not following the Principle when it is right is twice as bad|56|good|
|Always tell the Truth|30%|20%|Following the principal when it is wrong is twice as bad|-21|Bad|
|Eat more plants|70%|90%|Not following the Principle when it is right is Hella worse|245|Exceptional|

## Conclusion

If you want to take the easy way, pick principles that will change your behavior a lot, that will change it in the correct direction, and where the cost of not changing is high. 

But if you want to test your own with this scale, you can use [The P-Index App](https://pindex.e2thex.org)