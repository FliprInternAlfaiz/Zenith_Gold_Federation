type TProtectedNavigation = {
  Tabs: undefined;
};

declare module "react-native-call-log" {
  export interface CallLog {
    name: string | null;
    phoneNumber: string;
    type: string; // Incoming, Outgoing, Missed
    timestamp: string;
    duration: string;
  }
  const CallLogs: {
    load: (limit?: number) => Promise<CallLog[]>;
  };
  export default CallLogs;
}

