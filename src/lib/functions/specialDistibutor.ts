const MAX_SPECIAL = 10;
const POINTS = 22;
const MIN_SPECIAL = 1;

const SPECIAL_NAME_MAP: Record<number, string> = {
	0: 'Strength',
	1: 'Perception',
	2: 'Endurance',
	3: 'Charisma',
	4: 'Intelligence',
	5: 'Agility',
	6: 'Luck'
};

function _randomSpecial() {
	const SPECIAL: Record<string, number> = {
		Strength: MIN_SPECIAL,
		Perception: MIN_SPECIAL,
		Endurance: MIN_SPECIAL,
		Charisma: MIN_SPECIAL,
		Intelligence: MIN_SPECIAL,
		Agility: MIN_SPECIAL,
		Luck: MIN_SPECIAL
	};
	for (let i = 0; i < POINTS; i++) {
		const random = Math.floor(Math.random() * Object.keys(SPECIAL).length);
		if (SPECIAL[SPECIAL_NAME_MAP[random]] < MAX_SPECIAL) {
			SPECIAL[SPECIAL_NAME_MAP[random]]++;
		} else {
			i--;
		}
	}

	return SPECIAL;
	/* return {
			Strength: MAX_SPECIAL,
			Perception: MAX_SPECIAL,
			Endurance: MAX_SPECIAL,
			Charisma: MAX_SPECIAL,
			Intelligence: MAX_SPECIAL,
			Agility: MAX_SPECIAL,
			Luck: MAX_SPECIAL
		}; */
}

export function getRandomSpecial() {
	return _randomSpecial();
}
