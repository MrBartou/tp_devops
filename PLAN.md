# Github Plan

```mermaid
graph LR
    A[Développeur] --> B[Dépôt GitHub]
    B --> C[GitHub Actions]
    C --> D[Test et Déploiement]
    D --> E[Mise à jour du statut de déploiement]
```

# GitLab Plan

```mermaid
graph LR
    A[Développeur] --> B[Dépôt GitLab]
    B --> C[Lancement de Github Action]
    C --> D[CI/CD GitLab]
    D --> E[Test et Déploiement]
    E --> F[Mise à jour du statut de déploiement]
```

# Jenkins Plan

```mermaid
graph LR
A[Développeur] --> B[Dépôt Github]
B --> C[Jenkins]
C --> D[Création des Jobs Jenkins]
D --> E[Configuration de la Build]
E --> F[Exécution des tests]
F --> G[Déploiement]
```

# Travis Plan

```mermaid
graph LR
A[Développeur] --> B[Dépôt Github]
B --> C[Travis CI]
C --> D[Création des Workflow]
D --> E[Configuration des Workflow]
E --> F[Exécution des tests]
F --> G[Déploiement]
G --> H[Mise à jour du statut de déploiement]
```