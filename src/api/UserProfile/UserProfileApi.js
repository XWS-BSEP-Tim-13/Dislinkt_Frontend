import { axiosInstance } from "../AxiosInstance";

export async function getUserByUsername(username) {
    const response = await axiosInstance.get(`in/${username}`);
    return response.data.user;
}

export async function getCompanyById(id) {
    const response = await axiosInstance.get(`company/${id}`);
    return response.data.company;
}

export async function addExperience(newExperience) {
    const response = await axiosInstance.put('user/experience', newExperience);
    return response;
}

export async function removeExperience(experience) {
    const response = await axiosInstance.put('user/experience/delete', experience);
    return response;
}

export async function addEducation(newEducation) {
    const response = await axiosInstance.put('user/education', newEducation);
    return response;
}

export async function removeEducation(education) {
    const response = await axiosInstance.put('user/education/delete', education);
    return response;
}

export async function addSkill(newSkill) {
    const response = await axiosInstance.put('user/skill', newSkill);
    return response;
}

export async function removeSkill(skill) {
    const response = await axiosInstance.put('user/removeSkill', skill);
    return response;
}