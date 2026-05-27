type ChartTooltipEntry = {
	name?: string;
	value?: string | number;
	color?: string;
};

type ChartTooltipProps = {
	active?: boolean;
	payload?: ChartTooltipEntry[];
	label?: string | number;
};

const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white border border-gray rounded-(--d-10) px-(--d-10) py-(--d-8) text12px-desktop shadow">
				<p className="text-text text14px-desktop font-semibold mb-(--d-4)">{ label }</p>
				{ payload.map((entry) => (
					<p key={ entry.name } style={ { color: entry.color } }>
						{ entry.name }: <strong>{ entry.value }</strong>
					</p>
				)) }
			</div>
		);
	}

	return null;
};

export default ChartTooltip;
