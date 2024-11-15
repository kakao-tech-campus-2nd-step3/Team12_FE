import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';

interface CreateDateParams {
  study_id: number;
  requestData: {
    start_time: string;
    time_interval: number;
  }
}

interface DeleteDateParams {
  study_id: number;
  requestData: {
    start_time: string;
  }
}

interface UpdateDateParams {
  study_id: number;
  requestData: {
    start_time: string;
    time_interval: number;
    date_id: number;
  }
}

interface UpdateAttendanceParams {
  study_id: number;
  member_id: number;
  requestData: {
    date_id: number;
    is_attended: boolean;
  }
}

interface GetCodeParams {
  study_id: number;
  date_id?: number;
}

interface CheckAttendanceParams {
  study_id: string;
  requestData: {
    date_id?: number;
    code?: string;
  }
}

export async function createDate({ study_id, requestData }: CreateDateParams) {
  const response = await axiosInstance.post(endpoints.attendanceDate, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      study_id,
    },
  });
  return response;
}

export async function getDateList(study_id: number) {
  const response = await axiosInstance.get(endpoints.attendanceDate, {
    params: {
      study_id,
    },
  });
  return response.data;
}

export async function deleteDate({ study_id, requestData }: DeleteDateParams) {
  const response = await axiosInstance.delete(endpoints.attendanceDate, {
    params: {
      study_id,
    },
    data: requestData,
  });
  return response;
}

export async function updateDate({ study_id, requestData }: UpdateDateParams) {
  const response = await axiosInstance.put(endpoints.attendanceDate, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      study_id,
    },
  });
  return response;
}

export async function getAttendanceList(study_id: number) {
  const response = await axiosInstance.get(endpoints.attendance, {
    params: {
      study_id,
    },
  });
  return response.data;
}

export async function updateAttendance(
  { study_id, member_id, requestData }: UpdateAttendanceParams,
) {
  const response = await axiosInstance.put(endpoints.attendance, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      study_id,
      member_id,
    },
    data: requestData,
  });
  return response;
}

export async function getCode({ study_id, date_id }: GetCodeParams) {
  const response = await axiosInstance.get(endpoints.getCode, {
    params: {
      study_id,
      date_id,
    },
  });
  return response.data;
}

export async function checkAttendance({ study_id, requestData }: CheckAttendanceParams) {
  const response = await axiosInstance.post(endpoints.checkAttendance, requestData, {
    params: {
      study_id,
    },
  });
  return response.data;
}
