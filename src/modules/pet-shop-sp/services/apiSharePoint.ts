import axios from 'axios';
import { IRequestDelAssignById, IRequestGetItemList, IResponseFileAttach, IRole, ISpRespGeneral, ISpRespGetListItemGeneral } from './api.interface';

const axiosInstance = axios.create({
    baseURL: "https://i24h.sharepoint.com/sites/dev2/intern/quan",
    headers: {
        "Content-Type": "application/json",
    },
});

export function getFileAttachment(ServerRelativeUrl: string) {
  return axiosInstance.get<IResponseFileAttach>(`/${ServerRelativeUrl}`, {
    headers: {
      accept: 'application/json; odata=verbose',
      'content-type': 'application/json; odata=verbose',
    },
    responseType: 'arraybuffer',
  });
}

export function stopItemInheriting<T>(listName: string, itemId: number, FormDigest: string) {
  return axiosInstance.post<ISpRespGeneral<T>>(
      `/_api/web/lists/getbytitle('${listName}')/items(${itemId})/breakroleinheritance(copyRoleAssignments=true,clearSubscopes=true)`,
    {},
    {
      headers: {
        Accept: 'application/json;odata=verbose',
        'Content-Type': 'application/json',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function getAssingnment<T>(listName: string, itemId: number, FormDigest: string) {
  return axiosInstance.get<ISpRespGeneral<T>>(
    `/_api/web/lists/getbytitle('${listName}')/items(${itemId})/RoleAssignments`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json; odata=verbose',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function getAssignmentGroups<T>(listName: string, itemId: number, FormDigest: string) {
  return axiosInstance.get<ISpRespGeneral<T>>(
      `/_api/web/lists/getbytitle('${listName}')/items(${itemId})/ListItemAllFields/RoleAssignments/Groups`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json; odata=verbose',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function DelRoleAssignmentById<T>({
  listName,
  itemId,
  AssignmentId,
  FormDigest,
}: IRequestDelAssignById) {
  return axiosInstance.delete<ISpRespGeneral<T>>(
      `/_api/web/lists/getbytitle('${listName}')/items(${itemId})/ListItemAllFields/RoleAssignments/getbyprincipalid(${AssignmentId})`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json; odata=verbose',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function DelRoleAssignments<T>(
  listName: string,
  itemId: number,
  groupName: string,
  FormDigest: string
) {
  return axiosInstance.delete<ISpRespGeneral<T>>(
      `/_api/web/lists/getbytitle('${listName}')/items(${itemId})/ListItemAllFields/RoleAssignments/groups/RemoveByLoginName('${groupName}')`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json; odata=verbose',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function getRoleDefinitions<T>(FormDigest: string) {
  return axiosInstance.get<ISpRespGeneral<T>>(`/_api/web/roledefinitions`, {
    headers: {
      accept: 'application/json; odata=verbose',
      'content-type': 'application/json; odata=verbose',
      'X-RequestDigest': FormDigest,
    },
  });
}

export function addRoleAssignment<T>(
  listName: string,
  itemId: number,
  roles: IRole[],
  FormDigest: string
) {
  return axios.all(
    roles.map((role) => {
      return axiosInstance.post<ISpRespGeneral<T>>(
          `/_api/web/lists/getByTitle('${listName}')/items(${itemId})/roleassignments/addroleassignment(principalid=${role.principalId},roledefid=${role.roleDefId})`,
        {},
        {
          headers: {
            accept: 'application/json; odata=verbose',
            'content-type': 'application/json',
            'X-RequestDigest': `${FormDigest}`,
          },
        }
      );
    })
  );
}

export function getFormDigestValue<T>() {
  return axiosInstance.post<T>(`/_api/contextinfo?$select=FormDigestValue`, {
    headers: {
      Accept: 'application/json;odata=verbose;',
      'Content-Type': 'application/json',
    },
  });
}

export function getSiteGroup<T>(FormDigest: string) {
  return axiosInstance.get<ISpRespGeneral<T>>(`/_api/web/sitegroups`, {
    headers: {
      accept: 'application/json; odata=verbose',
      'content-type': 'application/json; odata=verbose',
      'X-RequestDigest': FormDigest,
    },
  });
}

export function getCurrentUser<T>() {
  return axiosInstance.get<ISpRespGeneral<T>>(`/_api/web/CurrentUser`, {
    headers: {
      Accept: 'application/json;odata=verbose;',
      'Content-Type': 'application/json',
    },
    params: {
      $select: `Id,Title,Email,Groups/Id,Groups/Title`,
      $expand: `Groups`,
    },
  });
}

export function getUserSite<T>() {
  return axiosInstance.get<ISpRespGetListItemGeneral<T>>(`/_api/web/siteusers`, {
    headers: {
      Accept: 'application/json;odata=verbose;',
      'Content-Type': 'application/json',
    },
    params: {
      $select: `Id,Title,Email,Groups/Id,Groups/Title`,
      $expand: `Groups`,
    },
  });
}

export function getItem<T>({
  listName,
  IdItem,
  select,
  expand,
}: {
  listName: string;
  IdItem: number;
  select: string;
  expand: string | undefined;
}) {
  return axiosInstance.get<ISpRespGeneral<T>>(
    `/_api/web/lists/getbytitle('${listName}')/items(${IdItem})`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json',
      },
      params: {
        $select: select,
        $expand: expand,
      },
    }
  );
}

export function getItemList<T>({
  listName,
  select,
  expand,
  filter,
  orderby,
  skip,
  top,
}: IRequestGetItemList) {
  return axiosInstance.get<ISpRespGetListItemGeneral<T>>(
    `/_api/web/lists/getbytitle('${listName}')/items()`,
    {
      headers: {
        accept: 'application/json; odata=verbose',
        'content-type': 'application/json;',
      },
      params: {
        $select: select,
        $expand: expand,
        $filter: filter,
        $orderby: orderby,
        $skiptoken: skip ? `Paged=TRUE&p_ID=${skip}` : undefined,
        $top: top || 5000,
      },
    }
  );
}

export function addItem<T>(listName: string, item: Partial<T>, FormDigest: string) {
  return axiosInstance.post(
    `/_api/web/lists/getbytitle('${listName}')/items()`,
    JSON.stringify(item),
    {
      headers: {
        Accept: 'application/json;odata=verbose',
        'Content-Type': 'application/json',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

export function updateItem<T>(listName: string, itemId: number, item: T, FormDigest: string) {
  return axiosInstance.post<ISpRespGeneral<T>>(
    `/_api/web/lists/getbytitle('${listName}')/items(${itemId})`,
    item,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;odata=verbose;',
        'X-RequestDigest': FormDigest,
        'X-HTTP-Method': 'MERGE',
        'If-Match': '*',
      },
    }
  );
}

export function deleteItem<T>(listName: string, itemId: any, FormDigest: any) {
  return axiosInstance.delete<ISpRespGeneral<T>>(
    `/_api/web/lists/getbytitle('${listName}')/items(${itemId})`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;odata=verbose',
        'X-RequestDigest': FormDigest,
        'If-Match': '*',
      },
    }
  );
}

export function sendEmail<T>(
  from: string,
  to: string[],
  subject: string,
  content: string,
  FormDigest: any
) {
  return axiosInstance.post<ISpRespGeneral<T>>(
    `/_api/SP.Utilities.Utility.SendEmail`,
    {
      properties: {
        __metadata: {
          type: 'SP.Utilities.EmailProperties',
        },
        From: from,
        To: { results: to },
        Subject: subject,
        Body: content,
      },
    },
    {
      headers: {
        Accept: 'application/json;odata=verbose',
        'Content-Type': 'application/json;odata=verbose',
        'X-RequestDigest': FormDigest,
      },
    }
  );
}

/*
PUT is the only method that you can use to update a file. The MERGE method is not allowed.

HTTP

Copy
POST https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles('{file_name}')/$value
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-HTTP-Method: "PUT"
X-RequestDigest: "{form_digest_value}"

"Contents of file"
*/

export function uploadFile<T>({
  listName,
  IdItem,
  fileName,
  file,
  FormDigestValue,
}: {
  listName: string;
  IdItem: number;
  fileName: string;
  file: any;
  FormDigestValue: any;
}) {
  return axiosInstance.post<ISpRespGeneral<T>>(
      `/_api/web/lists/getbytitle('${listName}')/items(${IdItem})/AttachmentFiles/add(FileName='${fileName}')`,
    file,
    {
      headers: {
        Accept: 'application/json; odata=verbose',
        'content-type': '',
        'X-RequestDigest': FormDigestValue,
      },
    }
  );
}
