export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    two_factor_confirmed_at: string | null;
    current_team_id: number;
    profile_photo_path: string | null;
    created_at: string;
    updated_at: string;
    profile_photo_url: string;
    current_team: Team;
    all_teams: Team[];
    two_factor_enabled: boolean;
    membership?: {
        user_id: number;
        team_id: number;
        role: string;
        created_at: string;
        updated_at: string;
    };
}

export interface Team {
    id: number;
    user_id: number;
    name: string;
    personal_team: boolean;
    team_invitations: {
        id: number;
        team_id: number;
        email: string;
        role: string;
        created_at: string;
        updated_at: string;
    }[];
    owner: User;
    users: User[];
    created_at: string;
    updated_at: string;
}

export interface Jetstream {
    canCreateTeams: boolean;
    canManageTwoFactorAuthentication: boolean;
    canUpdatePassword: boolean;
    canUpdateProfileInformation: boolean;
    hasEmailVerification: boolean;
    flash: any[];
    hasAccountDeletionFeatures: boolean;
    hasApiFeatures: boolean;
    hasTeamFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    managesProfilePhotos: boolean;
}

export interface Permissions {
    canAddTeamMembers: boolean;
    canDeleteTeam: boolean;
    canRemoveTeamMembers: boolean;
    canUpdateTeam: boolean;
    canUpdateTeamMembers: boolean;
}

export interface AvailableRoles {
    description: string;
    key: string;
    name: string;
    permissions: string[];
}

export interface Agent {
    browser: string;
    is_desktop: boolean;
    platform: string;
}

export interface Session {
    agent: Agent;
    browser: string;
    is_desktop: boolean;
    platform: string;
    ip_address: string;
    is_current_device: boolean;
    last_active: string;
}

export interface SessionData {
    sessions: Session[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    jetstream: Jetstream;
};
