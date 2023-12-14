import { useRef, type FormEvent, type FC, type ReactNode, useState } from 'react';
import InfoBox from './InfoBox.tsx';

type NewGoalProps = {
	onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	const [warningBox, setWarningBox] = useState<ReactNode>('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		setWarningBox('');
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		if (enteredGoal.length === 0 || enteredSummary.length === 0) {
			setWarningBox(
				<InfoBox mode="warning" severity="high">
					You can't add empty goal{' '}
				</InfoBox>
			);
			return;
		}
		event.currentTarget.reset();
		onAddGoal(enteredGoal, enteredSummary);

		// new FormData(event.currentTarget)
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor="goal">Your goal</label>
					<input id="goal " type="text" ref={goal} />
				</p>
				<p>
					<label htmlFor="summary">Short summary</label>
					<input id="summary " type="text" ref={summary} />
				</p>
				<p>
					<button>Add goal</button>
				</p>
			</form>
			{warningBox}
		</>
	);
};

export default NewGoal;
