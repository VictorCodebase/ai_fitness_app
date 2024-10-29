import * as GoogleFit from "react-native-google-fit";

async function fetchDailyStepCountSamples() {
	try {
		const options = {
			startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // Yesterday
			endDate: new Date(),
		};

		const results = await GoogleFit.getDailyStepCountSamples(options);

		console.log("Daily step count samples:", results);
	} catch (error) {
		console.error("Error fetching step count samples:", error);
	}
}
