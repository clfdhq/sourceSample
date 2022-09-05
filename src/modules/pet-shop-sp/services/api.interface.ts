export interface IFormDigest {
    FormDigestValue: string;
  }
  
  export interface IRequestGetItemList {
    listName: string;
    select: string;
    expand?: string;
    filter?: string;
    orderby?: string;
    skip?: number;
    top?: number;
  }
  
  export interface IRequestDelAssignById {
    listName: string;
    itemId: number;
    AssignmentId: number;
    FormDigest: string;
  }
  
  export interface IRole {
    principalId: number;
    roleDefId: number;
  }
  
  export interface IGroupUser {
    Id: number;
    Title: string;
  }
  
  export interface ICurrentUser {
    Title?: string;
    Email?: string;
    Id?: number;
    Groups?: IGroupUser[];
  }
  
  export interface IUser {
    Title?: string;
    Email?: string;
    Id?: number;
    Groups?: IGroupUser[];
  }
  
  export interface ISendMail {
    Title?: string;
  }
  
  export interface IFileUploadResp {
    ServerRelativeUrl: string;
    Name: string;
  }
  
  export interface IResponseFileAttach {
    AttachmentFiles: {
      results: {
        ServerRelativeUrl: string;
      };
    };
  }
  
  export interface ISpRespGeneral<T> {
    d?: T;
    results?: T[];
  }
  
  export interface IUserSite {
    results?: {
      Email?: string;
      Id?: number;
      Group?: [];
      Title?: string;
    };
  }
  
  export interface ISpRespGetListItemGeneral<T> {
    d?: {
      results: T[];
    };
  }
  
  export interface IEmail {
    Title: string;
    Email: string;
    Id: number;
  }
  
  export interface IListResponse<T> {
    Id: number | string;
    data: {
      d: T[];
    };
  }
  