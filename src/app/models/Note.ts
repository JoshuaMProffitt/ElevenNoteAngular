export interface Note {
    NoteID?: number;
    OwnerId?: number;
    Title: string;
    Content: string;
    IsStarred?: boolean;
    CreatedUtc?: Date;
    ModifiedUtc?: Date;
}