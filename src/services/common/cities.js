import api from "@/plugins/axios";

async function getCities() {
	try {
		const response = await api.get("/cidade/findAll");
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export default getCities;
