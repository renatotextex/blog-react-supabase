import axios from "axios";

export const api = axios.create({
    baseURL: 'https://vibbglhbsfneaicyahol.supabase.co/rest/v1',
    headers: {
       apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmJnbGhic2ZuZWFpY3lhaG9sIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTQ5NTA1NywiZXhwIjoyMDQxMDcxMDU3fQ.uAEiC8glYHMBuTkUDk_wi8Mv_DUGiO0CBOrqPWgDwRs',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmJnbGhic2ZuZWFpY3lhaG9sIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTQ5NTA1NywiZXhwIjoyMDQxMDcxMDU3fQ.uAEiC8glYHMBuTkUDk_wi8Mv_DUGiO0CBOrqPWgDwRs'
    }
})