import { type PropsWithChildren, type FC /* type ReactNode  */ } from 'react';

/* type CourseGoalProps = { title: string; children: ReactNode }; */

type CourseGoalProps = PropsWithChildren<{ id: number; title: string; onDelete: (id: number) => void }>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
};

export default CourseGoal;
