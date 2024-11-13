import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';

interface CreateDateParams {
  studyId: number;
  requestData: {
    start_time: string;
    time_interval: number;
  }
}

interface DeleteDateParams {
  studyId: number;
  requestData: {
    start_time: string;
  }
}

export async function createDate({ studyId, requestData }: CreateDateParams) {
  const response = await axiosInstance.post(endpoints.attendanceDate, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      studyId,
    },
  });
  return response;
}

export async function getDateList(studyId: number) {
  const response = await axiosInstance.get(endpoints.attendanceDate, {
    params: {
      studyId,
    },
  });
  return response.data;
}

export async function deleteDate({ studyId, requestData }: DeleteDateParams) {
  const response = await axiosInstance.delete(endpoints.attendanceDate, {
    params: {
      studyId,
    },
    data: requestData,
  });
  return response;
}

export async function getAttendanceList(studyId: number) {
  const response = await axiosInstance.get(endpoints.attendance, {
    params: {
      studyId,
    },
  });
  return response.data;
}
