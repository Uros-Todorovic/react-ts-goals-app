import CourseGoal from './components/CourseGoal';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList.tsx';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

/* import Header from './components/Header.tsx';
import { useState } from 'react';

 */

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	const [goals, setGoals] = useState<Array<CourseGoal>>([]);

	const handleAddGoal = (goal: string, summary: string) => {
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: goal,
				description: summary,
			};
			return [...prevGoals, newGoal];
		});
	};

	const handleDeleteGoal = (id: number) => {
		setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Yuour course goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
}
