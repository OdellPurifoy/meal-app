import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from './page.module.css';

function MealDetailsPage({params}) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound();
  }

  const formattedMealInstructions = meal.instructions.replace(/\n/g, '<br />')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator.email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: formattedMealInstructions,
        }}>
        </p>
      </main>
    </>
  )
}

export default MealDetailsPage;