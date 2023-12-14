import { CourseGoal as CGType } from '../App.tsx';
import { type FC, type ReactNode } from 'react';
import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';

type CourseGoalListProps = {
	goals: Array<CGType>;
	children?: ReactNode;
	onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
	if (goals.length === 0) {
		return <InfoBox mode="hint">You have no course goals yet, start adding them!</InfoBox>;
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode="warning" severity="medium">
				You are collecting a lot of goals. Don't put too much on your plate!!
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
			<ul>
				{goals.map(({ id, title, description }) => {
					return (
						<li key={id}>
							<CourseGoal title={title} onDelete={onDeleteGoal} id={id}>
								<p>{description}</p>
							</CourseGoal>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CourseGoalList;
